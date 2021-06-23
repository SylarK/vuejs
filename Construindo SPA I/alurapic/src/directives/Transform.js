export default {
    bind(el, binding, vnode){

        let current = 0;

        el.addEventListener('dblclick', function(){

            //default 
            let increment = binding.value || 90;
            let animate = false;
            let efeito;

            if(binding.modifiers.animate){
                animate = true;
            }

            if(!binding.arg || binding.arg == 'rotate'){
                if(binding.modifiers.reverse){
                    current -= increment;            
                }else{
                    current += increment;
                }
                efeito = `rotate(${current}deg)`;
            }
            else if(binding.arg == 'scale'){

                efeito = `scale(${increment})`

            }

            
            el.style.transform = efeito;
            if(animate) this.style.transition = 'transform .5s'
        })
    }
}