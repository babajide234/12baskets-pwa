export const container = {
    hidden: { opacity:0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3
      }
    }
  }
  
export const item = {
    hidden: { y:-2000, opacity:0 },
    show: { y:0, opacity:1 }
}

export const scaleDown ={
    hidden: {
        scale: 1,
        x:0,
        y:0
    },
    show: {
        scale: .6,
        x: 150,
        y: -40
    },
}