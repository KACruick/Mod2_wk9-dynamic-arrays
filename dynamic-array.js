class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = Array(this.capacity)
    
  }

  read(index) {
    return this.data[index]
    
  }

  push(val) {
    if (this.length === this.capacity){
      this.resize()
    }
    this.data[this.length] = val
    this.length++
  }


  pop() {
    if (this.length === 0) {
      return undefined
    }
    let num = this.data[this.length-1]
    this.data[this.length-1] = undefined
    this.length--
    return num;
  }

  shift() {
    let num = this.data[0]

    if (this.length === 0){
      return undefined
    }

    for(let i = 0; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
      
    }
    this.length--
    return num
  }

  unshift(val) {
    if (this.length === this.capacity){
      this.resize()
    }
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1]
    }
    this.length++;
    this.data[0] = val
  }

  indexOf(val) {
  for (let i = 0; i < this.length; i++){
    if (this.data[i] === val){
      return i
    } 
  }
  return -1
  }

  resize() {
    this.capacity *= 2
    const newData = new Array(this.capacity)
    for(let i = 0; i < this.length; i++){
      newData[i] = this.data[i]
    }
    this.data = newData
  }

}


module.exports = DynamicArray;
