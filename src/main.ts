import { getProfileData } from "./api/_profile.ts";
import {
  bgBlack,
  bgBrightBlack,
  brightBlue,
  bgGreen,
  bgYellow,
  yellow,
  bold,
  white,
  green,
blue
//} from "colors";
} from "https://deno.land/std@0.125.0/fmt/colors.ts";

async function main(args: string[]) {
  try{
    if(args.length === 0){
      usage();
      options();
      example();
    }
    else if(args.length === 1){
      usage();
      options();
      example();
      const profileData = getProfileData(args[0])
        .then((response) => {
        stockProfile(response);
      });
    }
  }catch(error){
    console.log(error);
    usage();
  }
}

function stockProfile(ticket: any){
  console.log(`${blue(`${ticket.companyName}`)}  - $${ticket.symbol}\t
${ticket.industry} | ${ticket.sector} \t
-----------------------------------------------------------------------------
@Basic Description                  ${ticket.state} | ${ticket.city} | ${ticket.address}
${yellow(ticket.description.substring(0, 450) + "." + "\t")} ...More
  
  
`
  );
}

function usage(){
  console.log(`  ${bold("stockit [CMD]")}\t
  The stock market in your terminal 📈\t

  ${bgBlack(bold("USAGE"))}
    $ ${green("stockit")} AAPL`);
}

function options(){
  console.log(`  
  ${bgBlack(bold("OPTIONS"))}
      --balance\t
      --income\t
      --cashflow
      --ratios
      --valuation`);
}

function example(){
  console.log(`  
  ${bgBlack(bold("EXAMPLE"))}
    $ ${green("stockit")} AAPL<Company Ticket> --balance                     Get the balance sheet from the last 5 years 
    $ ${green("stockit")} AAPL --income                                      Get the income statement from the last 5 years 
`);
}

main(Deno.args);
