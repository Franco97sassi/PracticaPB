class ProductManager{
 
    constructor(){
        this.products=[]
    }
    getNewId(){
        return this.products.length+1;
    }
    addProduct(title,description,price,thumbnail,code,stock){
       let newProduct={
        id:this.getNewId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock
       }
       if(this.products.some(e=>e.code==code)){
        return console.log(`Codigo ${code} repetido`);
       }
       this.products.push(newProduct)
    }
    getProducts=()=>{
         return this.products;
    }
    getProductById(id){
        let product=this.products.find(e=>e.id==id)
        if(!product){
            console.log("element not found");
        }
    }
}

//Testing
//creo instancia
const manager=new ProductManager();
//llamo al producta vacio
const products=manager.getProducts();
//  console.log(products);
//llamo al metodo al product
manager.addProduct("producto prueba","este es un producto de prueba",200,"sin imagen","abc123",25)
console.log(products);
//llamo al metodo que va a tirar error al estar repetido
// manager.addProduct("producto prueba","este es un producto de prueba",200,"sin imagen","abc123",25)
 //getProductById
 manager.getProductById(1)
 manager.getProductById(2)