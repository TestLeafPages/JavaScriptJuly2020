class SortSet extends Set{

    sort(value){
        let set = new Set(value);
        return Array.from(set).sort();
    }

    reverse(value){
        let set = new Set(value);
        return Array.from(set).sort().reverse();
    }

}

let dishes = new Set();
dishes.add("Vada");
dishes.add("Dosa");
dishes.add("Roti");

let sorting = new SortSet();
console.log("Sorted => "+ sorting.sort(dishes) );
console.log("Reversed => "+  sorting.reverse(dishes) );
// console.log(dishes);