$(document).ready(function(){
    $("#dai1").mouseenter(function(){
        $("#web-btns").fadeIn();
        $("#arena").fadeOut("500",function(){
             $("#arena").html("Website design service") ;
            $("#arenap").html("Looking for attractive, dynamic and responsive website? STS provides best websites in Egypt.") ;
            
            $("#arena").fadeIn("500")
             $("#arenap").fadeIn("500");
        }) ;
      
        
         
    }); 
    $("#dai1").mouseleave(function(){
        $("#web-btns").fadeOut();
    }) ;
    
        $("#dai2").mouseenter(function(){
        $("#erp-btns").fadeIn();
        $("#arena").fadeOut("500",function(){
             $("#arena").html("ERP Application") ;
            $("#arenap").html("Control financial statements, HR payroll, customer invoices and vendor purchases with ERP.") ;
            
            $("#arena").fadeIn("500")
             $("#arenap").fadeIn("500");
        }) ;
      
        
         
    }); 
    $("#dai2").mouseleave(function(){
        $("#erp-btns").fadeOut();
    }) ;
    
        $("#dai3").mouseenter(function(){
        $("#crm-btns").fadeIn();
        $("#arena").fadeOut("500",function(){
             $("#arena").html("CRM Application") ;
            $("#arenap").html("If you need to maintain your sales pipeline and customer history try CRM.") ;
             $("#arena").fadeIn("500")
             $("#arenap").fadeIn("500");
        }) ;
      
        
         
    }); 
    $("#dai3").mouseleave(function(){
        $("#crm-btns").fadeOut();
    }) ;
    
        $("#dai4").mouseenter(function(){
        $("#pos-btns").fadeIn();
        $("#arena").fadeOut("500",function(){
             $("#arena").html("POS Application") ;
            $("#arenap").html("Monitoring store sales and inventory stock in all branches is much easier now with POS.") ;
            
            $("#arena").fadeIn("500")
             $("#arenap").fadeIn("500");
        }) ;
      
        
         
    }); 
    $("#dai4").mouseleave(function(){
        $("#pos-btns").fadeOut();
    }) ;
})