import React, {useCallback, useState} from 'react';
import {NextPage} from "next";
import PageWrapper from "../components/PageWrapper";
import ProjectSections from "../components/layouts/ProjectSections/ProjectSections";
import BuroPreview from '../components/shared/SliderPreview/BuroPreview';

const Buro: NextPage = () => {

    const [hover, setHover] = useState<boolean>(false);
    const [currentHover, setCurrentHover] = useState<number>(-1);

    const hoverHandler = useCallback((val: boolean, index: number) => {
        setHover(val);
        setCurrentHover(val ? index : -1);
    }, []);

    return (
        <PageWrapper title={"ZNK App"} description={"Buro page"}>
            <div className="flex">
                <div className="flex">
                    <ProjectSections.LogoInf/>
                </div>
                <div className="w-full h-full flex">
                    <BuroPreview
                        name={"философия"}
                        imgSrc={"/buro_philosophy.png"}
                        hoverImg={"/buro_philosophy_hover.png"}
                        hover={hover}
                        setHover={(val) => hoverHandler(val, 0)}
                        widthDuration={300}
                    >
                        <div className="px-5 py-4.5">
                            <div className={`font-normal text-matterhorn uppercase ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}`}>философия</div>
                            {currentHover === 0 &&
                                <div className="w-fuu h-full flex flex-col items-center justify-center">
                                    fsfsdfsdf
                                </div>}
                        </div>
                    </BuroPreview>
                    <BuroPreview
                        name={"команда"}
                        imgSrc={"/buro_command.png"}
                        hoverImg={"/buro_command_hover.png"}
                        hover={hover}
                        setHover={(val) => hoverHandler(val, 1)}
                        widthDuration={300}
                    >
                        <div className="px-5 py-4.5">
                            <div className={`font-normal text-matterhorn uppercase ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}`}>команда</div>
                        </div>
                    </BuroPreview>
                    <BuroPreview
                        name={"достижения"}
                        imgSrc={"/buro_achievements.png"}
                        hoverImg={"/buro_achievements_hover.png"}
                        hover={hover}
                        setHover={(val) => hoverHandler(val, 2)}
                        widthDuration={300}
                    >
                        <div className="px-5 py-4.5">
                            <div className={`font-normal text-matterhorn uppercase ${hover ? "text-sl leading-21.5" : "text-4xl leading-46.26"}`}>достижения</div>
                        </div>
                    </BuroPreview>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Buro;