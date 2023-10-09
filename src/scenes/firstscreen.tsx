import {Circle, Layout, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, delay, easeInCirc, easeInOutCubic, tween, Vector2, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const backgroundRect = createRef<Rect>()


    // Create your animations here
    const textColor = '#ffffff'
   // const smallTitleColor = 'rgba(255,255,255,0)'
    const transparentColor = '#3B3B3B00'
    const rectColor = '#1e1f22'
    const circleColor = '#3b3b3b'
    const rect = createRef<Rect>()
    let vLogtitle = createRef<Txt>()
    let smallTitle = createRef<Txt>()

    view.add(
        <Rect
            ref={backgroundRect}
            x={0}
            y={0}
            width={view.width}
            height={view.height}
            fill={rectColor}
            alignItems={'center'}
            >
            <Rect
                layout
                width={10}
                height={170}
                fill ={circleColor}
                radius={20}
                ref={rect}
            >
                <Layout direction={"column"}   gap={32}  margin ={20}>
                    <Txt ref = {vLogtitle} fill = {textColor} fontSize={80}  size ={50} >Dev Log</Txt>
                    <Txt ref = {smallTitle} fill = {textColor} fontSize={40} size ={50}></Txt>
                </Layout>
            </Rect>
        </Rect>)
    yield* waitFor(2),
    yield* all(
        rect().size.x(760,2),
        vLogtitle().text("Veno Game Dev Log",2),
    )
    yield* smallTitle().text("vol.zero",2),
    yield* waitFor(2)
    yield* tween(1, value => {
        rect().position(
            Vector2.arcLerp(
                new Vector2(0,0),
                new Vector2(-550,-430),
                easeInOutCubic(value),));
    })

    yield* smallTitle().fill(transparentColor,0.1)
        .to(textColor,0.1).wait(0.2)
        .to(transparentColor,0.1)
        .to(textColor,0.1).wait(0.1)
        .to(transparentColor,0.1)
        .to(textColor,0.1).wait(0.05)
        .to(transparentColor,0.1)
    yield* all(
        rect().size.y(120,1),
        tween(1, value => {
            rect().position(
                Vector2.arcLerp(
                    new Vector2(-550,-430),
                    new Vector2(-550,-450),
                    easeInOutCubic(value),));
        })
    )
    yield* waitFor(5)








});
