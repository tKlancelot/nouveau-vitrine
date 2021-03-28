const threshold = 0.6;
const ratio = 0.6;
let observer1 = null;
const title = document.querySelector(`#section3 h3`);

const activate = function(elems){
    const id = elems.getAttribute('id');
    const anchor = document.querySelector(`a[href="#${id}"]`);
    if(anchor === null){
        return null;
    }
    anchor.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active','darkNeon'))
    anchor.classList.add('active','darkNeon');
}

const callback = function(entries,observer){
    entries.forEach(function (entry){
        if(entry.isIntersecting){
            console.log(entry);
            const id = entry.target.getAttribute('id');
            activate(entry.target);
            console.log(entry.boundingClientRect);
        }
    })
}

const spies = document.querySelectorAll("[data-spy]");

const scrollSpy = function(elems){
    if(observer1 !== null){
        elems.forEach(elem => observer.unobserve(elem) )
    }
    const y = Math.round(window.innerHeight * ratio);
    const observer = new IntersectionObserver(callback,{
        // threshold : threshold
        rootMargin : `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    spies.forEach(elems => observer.observe(elems));
}



if(spies.length > 0){
    scrollSpy(spies);
    window.addEventListener("resize",function(){
        scrollSpy(spies);
    })
}
