 //First problem
        //Array creation and initialization
         let arr=[];
         let n=5;
         for(let i=0;i<n;i++){
           arr[i]=prompt("Enter the number");
         }
         console.log(arr);

         //Second problem
         //Array manipulation(Add elements using push(),unshift(),Remove elements using pop(),shift())
         let arr1=[1,2,3,4,5];
         arr1.push(6);
         console.log("Array elements after push:\n"+arr1);
         arr1.unshift(0);
         console.log("Array elements after unshift:\n"+arr1);
         arr1.pop();
         console.log("Array elements after pop:\n"+arr1);
         arr1.shift();
         console.log("Array elements after shift:\n"+arr1);

         //Third problem
         //Array searching(using indexOf(),find(),includes())
         let arr2=[41,52,73,84,95];
         console.log("Index of 52 in array is "+arr2.indexOf(52));
         console.log("Index of 84 in array is "+arr2.find((x)=>x==84));
         console.log("Index of 73 in array is "+arr2.includes(73));

         //Fourth problem
         //Array filtering(using filter())
         let arr3=[2,5,8,9,14,16,19,24,26,23,27,39,32,47
         ,65,58,86,99,42,7];
         console.log("The elements divisible by 2 are\n"+arr3.filter((x)=>x%2==0));

         //Fifth problem
         //Array sorting(using sort() and reverse())
         let arr5=[12,95,58,76,35,14,85];
         console.log("The sorted array is\n"+arr5.sort());
         console.log("The reverse sorted array is\n"+arr5.reverse());
