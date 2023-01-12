import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        //Moodal Componentlarin calismasi icin 2 tane PROPS'a ihtiyaci vardir. isOpen ve
        //isOpen => Bu bize modalin gosterilsin veya gosterilmesini ayarlamamizi saglar. Gosterilmesini istiyorsak TRUE yazmamiz gerekiyor.
        //contentLabel => Buda modalimizi kullanicilara iyi bir isimle ortaya cikarabilmek icin gerekiyor. Tarayicida gozukmez. Modalimizin icindeki TITLE ile ayni olabilir. Accessibility ayarlari aktif edilirken gosterilebilir.

        //onRequestClose => Bu PROPS ise bir FONKSIYON alir isOpen gibi. Bu bize ESC ye bastigimizda veya MODAL disina tikladigimizda olacaklari yapmamizi belirler. Asagida okay butonuna ayarladigim fonksiyonla artik bu props da bize esc ye basinca ve modal disina tiklayinca kapatilmasini saglayacak modalin.
        //closeTimeoutMS => Bu ise kapatma esc disari tiklama okeye tiklama gibi islemlerde gecikme suresinin ne kadar olacagini soyluyor. Daha efektif yapmak icin 200 gibi kisa bir sure idealdir.
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearSelectedOption}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            { props.selectedOption && <p className="modal__body"> {props.selectedOption} </p> }

            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
);

export default OptionModal;