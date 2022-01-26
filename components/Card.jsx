import React, { PureComponent } from "react";
import { Flipped, spring } from "react-flip-toolkit";

const onElementAppear = (el, index) =>
  spring({
    onUpdate: val => {
      el.style.opacity = val;
    },
    delay: index * 50
  });

const onExit = type => (el, index, removeElement) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: val => {
      el.style.transform = `scale${type === "grid" ? "X" : "Y"}(${1 - val})`;
    },
    delay: index * 50,
    onComplete: removeElement
  });

  return () => {
    el.style.opacity = "";
    removeElement();
  };
};

const onGridExit = onExit("grid");
const onListExit = onExit("list");

class Card extends PureComponent {
  shouldFlip = (prev, current) => {
    if (prev.type !== current.type) {
      return true;
    }
    return false;
  };
  render() {
    const { id, title, desc, src, tags, color, type, stagger, addToFilteredIds} = this.props;
    const flipId = `item-${id}`;
    return (
      <Flipped
        flipId={flipId}
        onAppear={onElementAppear}
        onExit={type === "grid" ? onGridExit : onListExit}
        key={flipId}
        stagger={stagger}
        shouldInvert={this.shouldFlip}
      >
        {/* Card Item*/}
        <li className="overflow-hidden block rounded-sm  bg-[#002d49] bg-opacity-80 text-white">
          <Flipped inverseFlipId={flipId}>
            <div className="flex items-start justify-between h-full">
              <Flipped
                flipId={`${flipId}-content`}
                translate
                shouldFlip={this.shouldFlip}
                delayUntil={flipId}
              >
                <div className="h-full w-full p-4">
                  <div className="flex w-full px-2">
                    {/* Small Dot */}
                    <div className="w-4 m-2 rounded-full" style={{background: color}}></div>
                    <h3 className="text-2xl">{title}</h3>
                    {/* Remove Card Button [X] */}
                    <Flipped
                      flipId={`${flipId}-button`}
                      shouldFlip={this.shouldFlip}
                      delayUntil={flipId}
                    >
                      <button
                        className="w-8 ml-auto bg-transparent cursor-pointer text-[2.2rem] text-red-500"
                        onClick={() => addToFilteredIds(id)}
                      >
                        &times;
                      </button>
                    </Flipped>
                  </div>
  
                  {/* Image */}
                  <div>
                    <img className="h-full w-full m-auto rounded-sm px-4 py-3" src='/default-image.jpg' alt="" />
                  </div>

                  {/* SubTitle */}
                  <div className="h-[4rem] px-4">
                    <p className="italic text-gray-100 font-thin">{desc}</p>
                  </div>

                </div>
              </Flipped>


            </div>
          </Flipped>
        </li>
      </Flipped>
    );
  }
}

export default Card;
