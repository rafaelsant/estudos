import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;

public class TesteSomador {
    private Somador soma1;
    private Somador soma2;
    private Somador soma3;
    private Somador soma4;
    @Before
    public void criaSomas(){
        this.soma1 = new Somador(1,2);
        this.soma2 = new Somador(500,1200);
        this.soma3 = new Somador(1909,20009);
        this.soma4 = new Somador(-122,-98882);
    }

    @Test
    public void DeveSaberSeFuncionaASoma(){
        Integer soma1SumExp = 3;
        Integer soma2SumExp = 1700;
        Integer soma3SumExp = 21918;
        Integer soma4SumExp = -99004;

        Assert.assertEquals(soma1SumExp,soma1.CalculaSoma());
        Assert.assertEquals(soma2SumExp,soma2.CalculaSoma());
        Assert.assertEquals(soma3SumExp,soma3.CalculaSoma());
        Assert.assertEquals(soma4SumExp,soma4.CalculaSoma());
    }
    @Test
    public void deveSaberSeFuncionaMinusTest(){
        Integer soma1MinExp = 1;
        Integer soma2MinExp = 700;
        Integer soma3MinExp = 18100;
        Integer soma4MinExp = -98760;
        Assert.assertEquals(soma1MinExp,soma1.CalculaMinus());
        Assert.assertEquals(soma2MinExp,soma2.CalculaMinus());
        Assert.assertEquals(soma3MinExp,soma3.CalculaMinus());
        Assert.assertEquals(soma4MinExp,soma4.CalculaMinus());
    }
}
