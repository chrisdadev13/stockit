import { getProfileData } from "./api/_profile.ts";
import {
  bgBlack,
  bgBrightBlack,
  bgGreen,
  bgYellow,
  bold,
  white,
  green
//} from "colors";
} from "https://deno.land/std@0.125.0/fmt/colors.ts";

async function main(args: string[]) {
  try{
    if(args.length == 0){
      usage();
      options();
      example();
    }
  }catch(error){
    console.log(error);
    usage();
  }
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
