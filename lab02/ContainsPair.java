import java.util.List;
import java.util.Set;
import java.util.ArrayList;
import java.util.HashSet;

public class ContainsPair {

    public static boolean containsPair(List<Integer> l) {
        Set<Integer> s = new HashSet<Integer>(l);
        return s.size() != l.size();
    }

    public static void main(String[] args) {

        List<Integer> l1 = new ArrayList<Integer>();
        l1.add(1);
        l1.add(2);
        l1.add(3);
        l1.add(4);
        l1.add(5);
        l1.add(6);

        List<Integer> l2 = new ArrayList<Integer>();
        l2.add(1);
        l2.add(2);
        l2.add(3);
        l2.add(4);
        l2.add(5);
        l2.add(1);

        if (containsPair(l1)) {
            System.out.println("l1 contains duplicate");
        } else {
            System.out.println("l1 does not contain duplicate");
        }

        if (containsPair(l2)) {
            System.out.println("l2 contains duplicate");
        } else {
            System.out.println("l2 does not contain duplicate");
        }

    }
}
