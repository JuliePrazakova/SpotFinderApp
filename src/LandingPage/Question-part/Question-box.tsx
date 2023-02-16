import * as React from 'react';
import { Wrapper } from './Question-box.styles';


export type IQuestionBoxProps = Record<string, unknown>


const QuestionBox: React.FunctionComponent<IQuestionBoxProps> = () => {
    return (
        <Wrapper>
            <div className='title'>
                Any question? Ask here!
            </div>
            <form>
                                <div className='form-box'>
                    <div className='left-part'>
                                <div className='label'>Name
                            <input type="text" placeholder="firstname" className="input" />
                            <div className='vl'></div>
                            <input type="text" placeholder="lastname" className="input lastname" />
                        </div>
                        <div className='label'>E-mail
                            <input type="text" placeholder="example@gmail.com" className="input" />
                        </div>
                    </div>
                    <div className='label msg'>Message
                        <textarea name="text" placeholder="Don't hesitate to contact us!" className="input"></textarea>
                    </div>
                </div>
                <div className='submit-btn'>SEND</div>

            </form>
        </Wrapper>
    );
};

export default QuestionBox;
