 import { mergeProps, useRender } from "@base-ui/react";
 import {cva} from 'class-variance-authority'
 

const buttonVariants = cva("inline-flex justify-center items-center bg-red-200", 
{
  variants:{
    variant:{
      default:"",
      primary:"",
      destructive:"",
      warning:"",
    },
    size:{
      default: "h-12 px-4",
      icon: "h-12 w-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
 
 export default function Button(props) {
   

   const mergedProps = mergeProps(props, {
      className: buttonVariants(),
   });

   const element = useRender({
      defaultTagName: 'button',
      render: props.render,
      props: mergedProps,
   })
   
 return element;
 }
