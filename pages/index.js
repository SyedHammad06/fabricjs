import { useLayoutEffect, useRef } from 'react';
import { fabric } from 'fabric';

export default function Home() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = new fabric.StaticCanvas('canvas', {
      width: window.innerWidth - 30,
      height: window.innerHeight - 65,
      preserveObjectStacking: true,
    });

    const background = fabric.Image.fromURL(
      'https://images.unsplash.com/photo-1669236712949-b58f9758898d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      function (oImg) {
        oImg.scaleToWidth(canvas.width);
        oImg.setSrc;
        canvas.centerObject(oImg);
        canvas.add(oImg);
        canvas.sendToBack(oImg);
      },
      {
        crossOrigin: 'anonymous',
      }
    );

    fabric.loadSVGFromURL('./wave.svg', function (objects, options) {
      var svg = fabric.util.groupSVGElements(objects, options);
      svg.set({
        left: 0,
        top: canvas.height - svg.height,
      });
      canvas.add(svg);
      canvas.sendBackwards(svg);
      canvas.sendBackwards(svg);
      canvas.sendBackwards(svg);
    });

    const imgEle = document.getElementById('img');
    var img = new fabric.Image(imgEle, {
      top: 10,
      left: canvas.width - 215,
      crossOrigin: 'anonymous',
    });

    img.scaleToWidth(200);
    canvas.add(img);

    const circle = new fabric.Circle({
      left: -250,
      top: -280,
      radius: 250,
      fill: 'red',
    });

    fabric.Image.fromURL(
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      function (profile) {
        profile.scale(0.3).set({
          top: canvas.height - 260,
          left: canvas.width - 300,
          clipPath: circle,
        });
        canvas.add(profile);
      },
      {
        crossOrigin: 'anonymous',
      }
    );

    const name = new fabric.Text('John Doe', {
      left: canvas.width / 2 - 30,
      top: canvas.height - 150,
      fill: 'darkblue',
      fontWeight: 'bold',
      fontFamily: 'Times New Roman, serif',
    });

    const address =
      'No. 15, 3rd A Cross, Ramachandrappa Layout, Lingarajpuram, \n Bengaluru - 560084';

    const addressText = new fabric.Text(address, {
      left: canvas.width / 3 - 30,
      top: canvas.height - 90,
      fill: 'darkblue',
      fontFamily: 'Times New Roman, serif',
      fontSize: 22,
      textAlign: 'center',
    });

    canvas.add(addressText);
    canvas.add(name);
    canvas.bringToFront(name);
    canvas.renderAll();
  }, []);

  const downloadImg = () => {
    const element = document.createElement('a');
    element.setAttribute('href', canvasRef.current.toDataURL('image/png'));
    element.setAttribute('download', 'image.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className='box'>
      <canvas id='canvas' ref={canvasRef} />
      <img src='./logo.png' alt='logo' id='img' crossOrigin='anonymous' />
      <button onClick={downloadImg}>Download Canvas</button>
    </div>
  );
}
