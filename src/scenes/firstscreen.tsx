import {Circle, Layout, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const backgroundRect = createRef<Rect>()


    // Create your animations here
    const textColor = '#ffffff'
    const smallTitleColor = 'rgba(255,255,255,0)'
    const rectColor = '#1e1f22'
    const circleColor = '#3b3b3b'
    const rect = createRef<Rect>()
    let vLogtitle = createRef<Txt>()

    view.add(
        <Rect
            ref={backgroundRect}
            x={0}
            y={0}
            width={view.width}
            height={view.height}
            fill={rectColor}
            >
            <Rect layout
                  width={0}
                  height={170}
              fill ={circleColor}
              radius={20}
                ref={rect}
            >
                <Layout direction={"column"}   gap={32}  margin ={20}>
                    <Txt ref = {vLogtitle} fill = {textColor} fontSize={80}  size ={50} >Veno Game Dev Log</Txt>
                    <Txt fill = {smallTitleColor} fontSize={40} size ={50}> vol.zero</Txt>
                </Layout>
            </Rect>

        </Rect>)

    yield* all(
        rect().size.x(800,1)
    );
    yield * waitFor(1)
    
    yield* waitFor(5);
});
