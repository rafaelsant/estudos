public class Somador {
    public Integer int1;
    public Integer int2;

    public Somador(Integer int1, Integer int2) {
        this.int1 = int1;
        this.int2 = int2;
    }
    public Integer CalculaSoma(){
        return this.int1+this.int2;
    }
    public Integer CalculaMinus(){
        return this.int2-this.int1;
    }
}
