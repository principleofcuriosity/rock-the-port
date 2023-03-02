function makeMarquee () {
    const title = 'Rock The Port Music Festival, October 10–12, Hamburg'
    // an array is a list of things 
    // ['Text', booleans, numbers, {objects: 'this is an object', object: 'this is an object'}]
    const marqueeText = new Array(50).fill(title).join('   —   '); 
    // 1. we want to grab our .marquee span from the html
    // 2. we want to set our repeating title as the content
    const marquee = document.querySelector('.marquee span')
    // usind inner HTML sets the content inside an element
    marquee.innerHTML = marqueeText
    console.log(marquee)
}

makeMarquee()
