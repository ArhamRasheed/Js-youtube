// humra code global execution context mn hota h 
// ye pura ek single thread mn execute hota h 
// javascript is single threaded har chez ek process mn execute hoti h 

/*
Execution Context:
1)Global Execution Context
2)Function Execution Context
3)Eval Execution Context => apne ap mn ek global object ki property hota h 
*/

// code du phases mn run hota h 

// 1) Memory creation phase => jo bhi variable declare kiya h unk lye jaga allocate hoti h 
// 2) Execution Phase => yaha sary kam hoty h 

//EXAMPLE
/*
let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1+num2
    return total
}
let result = addnum(val1, val2)
let result2 = addnum(10,5)
*/

// steps:
/*
1) Global execution(environment) -> this(isk andr allocate hota h ) : choty se chota code yahi se shuru hota h, ye tu hona hii hona h 

// line 19, 20
2) Memory phase : sary variables ko jama kr k rakha jata h => var1->undefined, var2-> undefined, sary var ka nam le kr un mn undefined rakha jata h,
line 21=> addnum->defination
line 25, 26 => result1->undefined, result2->undefined
ye tha first cycle ye hota hii hota h 

THIRS phase
3) Execution Phase
var1<-10
var2<-5
line 21-24 => yaha koi kam nh horha filhal tu kuch execute nh hoga
line 25: addnum-> apna alag se executional context create hoga => new variable environment + execution thread(jitne bar funcction exe hoty h utne bar new box create hota h called new executional context), ab isk lye bhi memory phase and execution phase krna parega
        Memory Phase            Execution Context
        var1->undefined         Num1->10
        var2->undefined         Num2->5
        total->undefined        total->15

        NOTE:total return hota h parent executional context ie Global executional context mn
        And new executional context gets deleted as well

result1<-15
result2: 
            NEW EXECUTIONAL CONTEXT
                   NVE+THREAD
            ___________|_____________       
            |                       |
            |                       |
            V                       V
        Memory Phase          Execution Phase
           sab repeat hoga jese upr howa

*/

// CALL STACK
/*
          |          |    LIFO chalta 
          |          |    NOTE:Global Exe rehta rehta 
          |          |
          |          |
          |__________|
          |Global Exe|
          |__________|
*/

//SUMMARY
/*
1.JS creates Global excution context 
2.Next it creates memory phase
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase,the variables are initialsed to given values and 
  when the function s are called,it creates a memory phase and execution phase for the function 
  just like the main one.

For live demo:
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack.

correct me if there are any mistakes or add to this if something is missing.
*/