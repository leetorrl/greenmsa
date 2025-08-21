using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace lotto
{
    class Program
    {

        static Random rand = new Random();
        static string connectionString = "Server=localhost;Database=LottoDB;Trusted_Connection=True;";
        static void Main(string[] args)
        {
            
            int lines;
            int adress;

            // 지역 입력 받기
            while (true)
            {
                Console.WriteLine("지역을 선택해 주세요");
                Console.WriteLine("1(서울), 2(부산), 3(대구), 4(대전), 5(인천)");
                string adressnum = Console.ReadLine();

                if (int.TryParse(adressnum, out adress) && adress >= 1 && adress <= 5)
                {
                    break;
                }
                else
                {
                    Console.WriteLine("주어진 지역 번호만 입력 바랍니다.");
                }
            }

   
            while (true)
            {
                Console.Write("로또 줄 수를 입력하세요 (1~5): ");
                string input = Console.ReadLine();

                if (int.TryParse(input, out lines) && lines >= 1 && lines <= 5)
                {
                    break;
                }
                else
                {
                    Console.WriteLine("잘못된 입력입니다. 1에서 5 사이의 숫자를 입력하세요.\n");
                }
            }


            if (lines >= 1 && lines <= 5)
            {

                for (int i = 0; i < lines; i++)
                {

                    int[] lotto = GenerateLottoLine();
                    Console.WriteLine($"[{i + 1}줄] " + string.Join(", ", lotto));

                    SaveToDatabase(lotto, adress);
                }
            }

            else {

                Console.WriteLine("1에서 5 사이의 숫자만 입력하세요. ");
              

            }
            Console.WriteLine("아무키나 누르시오");
            Console.ReadKey();

        }

        static void SaveToDatabase(int[] numbers, int adress)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                string query = @"
                    INSERT INTO LottoResults 
                        (First, Second, Third, Fourth, Fifth, Sixth, AddressNum) 
                    VALUES 
                        (@first, @second, @third, @fourth, @fifth, @sixth, @addressnum)";

                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@first", numbers[0]);
                    cmd.Parameters.AddWithValue("@second", numbers[1]);
                    cmd.Parameters.AddWithValue("@third", numbers[2]);
                    cmd.Parameters.AddWithValue("@fourth", numbers[3]);
                    cmd.Parameters.AddWithValue("@fifth", numbers[4]);
                    cmd.Parameters.AddWithValue("@sixth", numbers[5]);
                    cmd.Parameters.AddWithValue("@addressnum", adress);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        static int[] GenerateLottoLine()
        {
            int[] lottolist = new int[6];

            for (int i = 0; i < lottolist.Length;)
            {
                int number = rand.Next(1, 46);
                bool check = false;

                for (int j = 0; j < i; j++)
                {

                    if (lottolist[j] == number)
                    {
                        check = true;
                        break;
                    }
                }
                if (!check)
                {
                    lottolist[i] = number;
                    i++;
                }
            }

            for (int i = 0; i < lottolist.Length - 1; i++)
            {

                for (int j = 0; j < lottolist.Length - 1; j++)
                {

                    if (lottolist[j] > lottolist[j + 1])
                    {
                        int temp = lottolist[j];
                        lottolist[j] = lottolist[j + 1];
                        lottolist[j + 1] = temp;

                    }
                }
            }

            return lottolist;
        }
    }

}

