package Ex07.src;
//1. 두개의 주사위를 던졌을때, 눈의 합이 6이 되는 모든 경우의 수를 출력하는 프로그램 작성
public class 기출문제2 {

    public static void main(String[] args) {

        int sum = 0;

        while(true){

            double a = Math.random() * 10 + 1;
            int b = (int) a;
              double i = Math.random() * 10 + 1;
              int j = (int) i;

              if (b < 7 && j<7) {//모든 경우의가 아닌 두 주사위를 던져 6이되는 경우의 수만 랜덤생산
                  if(b+j==6){
                      System.out.println("합이 6이되면 출력="+(b+j));
                      System.out.println("첫번째 주사위수=" + b);
                      System.out.println("두번째 주사위수=" + j);
                      break;
                  }
                }
                }
            }
    }
