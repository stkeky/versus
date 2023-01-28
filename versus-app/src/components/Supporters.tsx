import React from 'react';
import {Comment, Header} from "semantic-ui-react";

interface SupporterProps {
    supporters: Array<any>
}

const Supporters: React.FC<SupporterProps> = (props) => {
    return (
        <Comment.Group>
            <Header as='h4' dividing>
                Supporters
            </Header>

            {props.supporters.map((supporter: any) => {
                return (
                    <Comment>
                        <Comment.Avatar src={supporter.avatar}/>
                        <Comment.Content>
                            <Comment.Author as='a'>{supporter.name}</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>{supporter.comment || "..."}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                );
            })}
        </Comment.Group>
    );
};

export default Supporters;