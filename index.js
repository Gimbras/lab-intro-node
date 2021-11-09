class SortedList {
  constructor(items, lenght) {
     this.items = [];
     this.length = 0; 

  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => {
      if (a < b) {
          return 1
      } else if (a > b) {
          return -1
      } else {
          return 0
      }
      //return this.items
    })
  }

  get(pos) {
    value = this.items[pos]
        if (value !== 'undefinied') {return value}
        else {throw new Error('OutOfBounds')}
  }

  max() {
    if (this.items.length === 0) {
        throw new Error('EmptySortedList')
} else {
return Math.max(...this.items)
}
  }

  min() {
    if (this.items.length === 0) {
    throw new Error('EmptySortedList')
} else {
return Math.min(...this.items)
}}

sum() {
          let sum = 0;
          for (const val of this.items) {
             sum += val;
         }
         return sum;
         
}


avg() {
  let sumNumbers = 0
  let EmptySortedList = []
  if (this.items.length === 0) {
      return EmptySortedList
  } else {
  for (const i of this.items) {
      sumNumbers += i
 }
}
 return sumNumbers / this.items.length
}

}

module.exports = SortedList;



