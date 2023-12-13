function init()                                                             // Method(1)
{

    let string="";
    let buttons=document.querySelectorAll('.button');
    Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML=='=')
            {
                string=eval(string);
                document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=='C')
            {
                string=""
                document.querySelector('input').value=string;
            }
            else{
                console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
            }
                
            
        })
        
    })
}
//init();




// Alternative method to do the same work;                           (Method 2)
let string="";
function ad(e)
{
    string=string+e;
    console.log(string)
    document.querySelector('input').value=string;

}
function calc(string)
{
        string=eval(string);
        console.log(string);
        document.querySelector('input').value=string;
        
        
}
function clr()
{
    string="";
    console.log(string);
    document.querySelector('input').value=string;;

}