let button = document.querySelector('button');
      let count = 0;

      //Generating random numbers
      let  random = (num) => {
          return Math.floor(Math.random() * num);
      }

      //Genrating random colors
      let randomColor = () => {
        return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
      }

      //Setting the colors to the button
      let setColor = () => {
          let colorValue = randomColor();
          document.querySelector('button').style.background = colorValue;
          document.querySelector('button').setAttribute('class', "white")
          //   count++;
          //if button is clicked more then twice
        // if(count >= 2){
        //     button.removeEventListener('click',setColor);
        // }
      }


    //adding click event 
      button.addEventListener('click', setColor);