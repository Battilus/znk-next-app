import React, {FC} from 'react';
import Button from '../../../shared/Button/Button';
import {useTranslation} from "next-i18next";

const ShowProjectSlider: FC = () => {
    const {t} = useTranslation();

    return (
        <div className="fixed top-0 right-0 h-screen w-8 bg-whiteSmoke uppercase flex items-center justify-center -rotate-180">
            <Button.Link
                styleType={"inverse"}
                className={`h-full w-8 border-r border-matterhorn`}
                href={"/projects"}
            >
                <div className="vertical-rl pr-1.7 pl-1.3">{t("all_projects")}</div>
            </Button.Link>
        </div>
    );
};

export default ShowProjectSlider;