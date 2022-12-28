import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric-pure-browser';

export default function Home() {
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);
  const [state, setState] = useState('');
  const [initCanvas, setInitCanvas] = useState();
  const [backImg, setBackImg] = useState('/back-place.jpg');

  // useEffect(() => {
  //   const canvas = new fabric.StaticCanvas('canvas', {
  //     width: window.innerWidth - 10,
  //     height: window.innerHeight - 65,
  //     preserveObjectStacking: true,
  //   });
  //   const background = new fabric.Image.fromURL(
  //     'https://images.unsplash.com/photo-1669236712949-b58f9758898d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  //     function (oImg) {
  //       oImg.scaleToWidth(canvas.width);
  //       oImg.setSrc;
  //       canvas.centerObject(oImg);
  //       canvas.add(oImg);
  //       canvas.sendToBack(oImg);
  //     },
  //     {
  //       crossOrigin: 'anonymous',
  //     }
  //   );
  //   fabric.loadSVGFromURL('./wave.svg', function (objects, options) {
  //     var svg = fabric.util.groupSVGElements(objects, options);
  //     svg.set({
  //       left: 0,
  //       top: canvas.height - svg.height,
  //     });
  //     canvas.add(svg);
  //     canvas.sendBackwards(svg);
  //     canvas.sendBackwards(svg);
  //     canvas.sendBackwards(svg);
  //   });
  //   const imgEle = document.getElementById('img');
  //   var img = new fabric.Image(imgEle, {
  //     top: 10,
  //     left: canvas.width - 215,
  //     crossOrigin: 'anonymous',
  //   });
  //   img.scaleToWidth(200);
  //   canvas.add(img);
  //   const circle = new fabric.Circle({
  //     left: -250,
  //     top: -280,
  //     radius: 250,
  //     fill: 'red',
  //   });
  //   fabric.Image.fromURL(
  //     'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     function (profile) {
  //       profile.scale(0.3).set({
  //         top: canvas.height - 260,
  //         left: canvas.width - 300,
  //         clipPath: circle,
  //       });
  //       canvas.add(profile);
  //     },
  //     {
  //       crossOrigin: 'anonymous',
  //     }
  //   );
  //   const name = new fabric.Text('John Doe', {
  //     left: canvas.width / 2 - 30,
  //     top: canvas.height - 150,
  //     fill: 'darkblue',
  //     fontWeight: 'bold',
  //     fontFamily: 'Times New Roman, serif',
  //   });
  //   const address =
  //     'No. 15, 3rd A Cross, Ramachandrappa Layout, Lingarajpuram, \n Bengaluru - 560084';
  //   const addressText = new fabric.Text(address, {
  //     left: canvas.width / 3 - 30,
  //     top: canvas.height - 90,
  //     fill: 'darkblue',
  //     fontFamily: 'Times New Roman, serif',
  //     fontSize: 22,
  //     textAlign: 'center',
  //   });
  //   canvas.add(addressText);
  //   canvas.add(name);
  //   canvas.bringToFront(name);
  //   canvas.renderAll();
  // }, []);

  // useEffect(() => {
  //   const canvas = new fabric.Canvas('canvas', {
  //     width: window.innerWidth - 30,
  //     height: window.innerHeight - 65,
  //   });

  //   const rect = new fabric.Rect({
  //     width: 50,
  //     height: 50,
  //     left: 20,
  //     top: 20,
  //     fill: 'red',
  //   });

  //   rect.animate('left', '1000', {
  //     onChange: canvas.renderAll.bind(canvas),
  //     from: 20,
  //     duration: 2000,
  //   });

  //   fabric.Image.fromURL(
  //     'https://images.unsplash.com/photo-1671721931226-542224337b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1418&q=80',
  //     function (oImg) {
  //       oImg.scaleToWidth(300);
  //       oImg.filters.push(new fabric.Image.filters.Noise({ noise: 50 }));
  //       oImg.applyFilters();
  //       canvas.add(oImg);
  //     },
  //     {
  //       top: 100,
  //       left: 20,
  //       crossOrigin: 'anonymous',
  //     }
  //   );

  //   canvas.add(rect);

  //   const circle = new fabric.Circle({
  //     left: 340,
  //     top: 200,
  //     radius: 100,
  //   });

  //   const gradient = new fabric.Gradient({
  //     type: 'linear',
  //     gradientUnits: 'percentage',
  //     coords: { x1: 0, y1: 0, x2: 0.5, y1: 0.5 },
  //     colorStops: [
  //       { offset: 0, color: 'red' },
  //       { offset: 0.3, color: 'orange' },
  //       { offset: 0.6, color: 'greenyellow' },
  //       { offset: 1, color: 'green' },
  //     ],
  //   });

  //   circle.set('fill', gradient);

  //   canvas.add(circle);

  //   const circle2 = new fabric.Circle({
  //     radius: 100,
  //     fill: '#eef',
  //     scaleY: 0.5,
  //     originX: 'center',
  //     originY: 'center',
  //   });

  //   const text2 = new fabric.Text('hello world', {
  //     fontSize: 30,
  //     originX: 'center',
  //     originY: 'center',
  //   });

  //   const group = new fabric.Group([circle2, text2], {
  //     top: 250,
  //     left: 600,
  //   });

  //   canvas.add(group);

  //   group.item(0).set({ fill: 'red' });
  //   group.item(1).set({
  //     text: 'Hey Google!',
  //     fill: 'white',
  //   });

  //   setInitCanvas(canvas);

  //   canvas.on('object:modified', function (e) {
  //     return setInitCanvas(canvas);
  //   });

  //   canvas.renderAll();
  // }, []);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: window.innerWidth - 30,
      height: window.innerHeight - 70,
    });

    fabric.Image.fromURL(
      backImg,
      function (back) {
        back.scaleToWidth(canvas.width);
        canvas.add(back);
        canvas.centerObject(back);
        canvas.renderAll();

        const rect = new fabric.Rect({
          width: 100,
          height: 200,
          fill: 'red',
          left: 20,
          top: 20,
        });

        canvas.add(rect);

        setInitCanvas(canvas);

        canvas.on('object:moving', function (e) {
          back._element.src = backImg;
        });

        canvas.on('object:modified', function (e) {
          return setInitCanvas(canvas);
        });
      },
      {
        selectable: false,
        crossOrigin: 'anonymous',
      }
    );
  }, [backImg]);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas2', {
      width: window.innerWidth - 30,
      height: window.innerHeight - 65,
    });

    canvas.loadFromJSON(state);

    canvas.renderAll();
  }, [state]);

  const saveCanvas = () => {
    if (initCanvas) {
      setState(initCanvas.toJSON());
    }
  };

  const downloadImg = () => {
    const element = document.createElement('a');
    element.setAttribute('href', canvasRef.current.toDataURL('image/png'));
    element.setAttribute('download', 'image.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const changeBackground = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (file) {
      setBackImg(file.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='box'>
      <canvas id='canvas' ref={canvasRef} />
      <canvas id='canvas2' ref={canvasRef2} style={{ marginTop: '2rem' }} />
      <img src='./logo.png' alt='logo' id='img' crossOrigin='anonymous' />
      <div style={{ marginTop: '30px', marginLeft: '5px' }}>
        <input type='file' accept='image/*' onChange={changeBackground} />
      </div>
      <button onClick={downloadImg}>Download Canvas</button>
      <button onClick={saveCanvas}>Save canvas</button>
    </div>
  );
}
