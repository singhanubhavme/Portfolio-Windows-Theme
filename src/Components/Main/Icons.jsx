import { Fragment } from "react";
import ThisPC from '../../assets/icons/this-pc.ico';
import MyDocuments from '../../assets/icons/my-documents.ico';
import Icon from "../Icon";

const Icons = () => {
    return (
        <Fragment>
            <div className="icon-col flex flex-row">
                <div className="desktop-icons text-white">
                    <Icon icon={MyDocuments} title={'Anubhav'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                </div>
                <div className="desktop-icons text-white">
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                    <Icon icon={ThisPC} title={'This PC'} />
                </div>
            </div>
        </Fragment>
    )
}

export default Icons;