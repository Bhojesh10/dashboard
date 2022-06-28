import Card from "./card";

function Heading(){
    let cards=[
        {
     Earn:"EARNINGS(MONTHLY)",
     cost:"$40,000",
     theme:"primary",
        },
        {
        Earn:"EARNINGS(ANNUAL)",
     cost:"$215,00",
     theme:"success",
        },
        {
        Earn:"TASK",
     cost:40,
     theme:"info",
        },
        {
        Earn:"PENDING REQUEST",
     cost:12,
     theme:"warning",
        }
    ]
    return(
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">
{
    cards.map((list)=>{
        return <Card data={list}></Card>
    })
}
                    
                    
                    </div>


                    </>          
                    
    )
}
export default Heading;