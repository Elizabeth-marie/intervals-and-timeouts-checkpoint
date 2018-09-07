document.addEventListener('DOMContentLoaded', function() {

  let button = document.getElementById('transition')

  let box1 = document.getElementById('change-A')
  let box2 = document.getElementById('change-B')
  let errorP = document.getElementById('error')
  let errorT = document.createTextNode('Error! Please Select a Change')
  errorP.appendChild(errorT)
  let changingP = document.getElementById('changing')

  button.addEventListener('click', change)


  function change(event) {

    if (box1.value === '' || box2.value === '') {
      //want a paragraph tag to show up
      errorP.hidden = false
      //want error to go away when input is correct
    } else {
      errorP.hidden = true
    }

    //if
    //set timeout(() =>)

    setTimeout(function(){
      switch(box1.value) {
        case 'color':
          // console.log(`color`);
          changingP.style.color = 'red';
          break
        case 'background':
          changingP.setAttribute('style', 'background-color: pink');
          break;
        case 'font-style':
          changingP.setAttribute('style', 'font-style: oblique');
          break;
        case 'font-weight':
          changingP.setAttribute('style', 'font-weight: bold')
          break;
        }

      } ,1000)

      setTimeout(function(){
        switch (box2.value) {
          case 'color':
            // console.log(`color`);
            changingP.style.color = 'blue';
            break
          case 'background':
            changingP.style.background = 'orange';
            break;
          case 'font-style':
            changingP.style.fontStyle = 'oblique';
            break;
          case 'font-weight':
            changingP.style.fontWeight = 'bold';
            break;
          }
        } ,1500)




}
})



// DONE -> 1. Add an event listener to the button on click
// DONE -> 2. If either select box does not have an option selected, surface an error
// 3. When you click the button, make a change to the changing element
//   (a) If 'Color' is selected, change the color of the text
//   (b) If 'Background Color' is selected, change the background-color
//   (c) If 'Font Style' is selected, change the font-style
//   (d) If 'Font Weight' is selected, change the font-weight
// 4. Run the transitions in order. Make sure to nest the timeouts!
// 5. When you click the "Go!" button again, it should clear out the styles first before transition to new styles.
