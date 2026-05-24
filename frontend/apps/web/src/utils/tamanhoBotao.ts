export default function atribuirEstilo(sm?:boolean, md?:boolean, lg?:boolean, xl?:boolean):string {
    return sm ? "h-8 p-3.5 text-[12px] rounded-[8px]" : 
    md ? "h-10 p-4.5 text-[13px] rounded-[10px]" :
    lg ? "h-12 p-6 text-[14px] rounded-[10px]" : 
    xl ? "h-14 p-8 text-[15px] rounded-[10px]" : "" 
}