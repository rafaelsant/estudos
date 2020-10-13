import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Capitulo2 {
    public static void main(String ... args){
        Usuario user1 = new Usuario("Paulo Sileveira",150);
        Usuario user2 = new Usuario("Rodrigo Rurini",150);
        Usuario user3 = new Usuario("Gilherme Silveira",190);

        List<Usuario> usuarios = Arrays.asList(user1,user2,user3);

        for (Usuario u :usuarios){
            System.out.println(u.getNome());
        }
        usuarios.forEach(new Consumer<Usuario>() {
            public void accept(Usuario p) {
                System.out.println(p.getNome());
            }
        });

        usuarios.forEach(u -> System.out.println(u.getNome()));

        usuarios.forEach(u -> u.tornaModerador());
    }
}
