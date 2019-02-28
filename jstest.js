document.getElementById("myForm").addEventListener('submit',myFunction);

    function myFunction(e){

         var n=document.getElementById("name").value;
            var u=document.getElementById("url").value;
                 var d={
                     
                     name:n,
                
                 url:u
                 
                 };
       // console.log(d);

        if(localStorage.getItem('bookmarks') === null){

            var bookmarks=[];
            bookmarks.push(d);
            localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

        }else{

            var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

            

            bookmarks.push(d);

            localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

            
        }

        
        e.preventDefault();
        

       
    }

    function fetchStroage(){
        var myVar;
        myVar = setTimeout(showPage, 3000);
        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        //get out put

        var output=document.getElementById('demo');


        output.innerHTML+='';

        for (var index = 0; index < bookmarks.length; index++) {
            var name=bookmarks[index].name;
            var url=bookmarks[index].url;
            output.innerHTML+='<div class="d-sm-none d-md-block p-2 bg-dark text-white"><h2>'+name+'  '+'<a class="btn btn-success" href="'+url+'" role="button">Visit</a>'
            +'  '+'<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#" role="button">Delete</a>'
            +'</h2></div><br>';
            
        }

        
       //console.log(bookmarks);


    }

    function deleteBookmark(url){
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

        for (var index = 0; index < bookmarks.length; index++) {

            if(bookmarks[index].url==url){

                bookmarks.splice(index,1);

               

            }
            
            
        }

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        fetchStroage();

        
    }
