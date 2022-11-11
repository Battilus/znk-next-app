import React, {FC} from 'react';
import Button from '../../../shared/Button/Button';

const ShowProjectSlider: FC = () => {
    return (
        <div className="fixed top-0 right-0 h-screen w-8 bg-whiteSmoke uppercase flex items-center justify-center -rotate-180">
            <Button.Link
                styleType={"inverse"}
                className={`h-full w-8 border-r border-matterhorn`}
                href={"/projects"}
            >
                <p className="vertical-rl pr-1.7 pl-1.3">Все проекты</p>
            </Button.Link>
        </div>
    );
};

export default ShowProjectSlider;