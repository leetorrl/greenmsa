package Ex08.src;

public class Ex05 {
//5! = 5*4!
//4! = 4*3!
//3! = 3*2!
// ..
//    재귀 함수= 자기자신의 함수를 호출하는것

    public static int fact(int num) { //숫자의 반복문으로 생각하는게 편함

        if (num >0) {
            return 2 * fact(num-1);


            // 5*fact(4)
//         5*4*fact(3)
//            5*4*3*fact(2)
//            5*4*3*2*fact(1)
//            5*4*3*2*1*fact(0)
//            5*4*3*2*1*1
        }
        else {
        return 1;
        }
    }

        public static void main (String[]args){

            int result = fact(4);
            System.out.println(result);
//        String[] strary = {"aa","bb","cc"};
//        System.out.println("배열 선언함");
//        main(strary);
        }

    }
