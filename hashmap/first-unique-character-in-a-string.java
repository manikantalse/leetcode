import java.util.*;

class Solution {
    public int firstUniqChar(String s) {
        Map<Character,Integer> map = new HashMap<>();
        char chars[] = s.toCharArray();
        for(char ch: chars){
            var count = map.containsKey(ch) ? map.get(ch) : 0;
            map.put(ch,count+1);
        }
        
        for(char ch: chars){
            if(map.get(ch) == 1){
                return s.indexOf(ch);
            }
        }
        return -1;
    }
}