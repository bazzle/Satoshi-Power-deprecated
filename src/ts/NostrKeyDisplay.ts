import Utilities from './Utilities';

function NostrKeyDisplay(){

    const nostrPubKey = "npub1y73ajm09j3wra8jj9e3h8rkj3xculh520m9plgc6j57rkg7g0yyqt5p5dt";
    const nostrPubKeyFirstPart = () => {
        return nostrPubKey.substring(0, 15);
    }
    const nostrPubKeyLastPart = () => {
        return nostrPubKey.slice(-15);
    }
    const nostrPubKeyDisplay = `${nostrPubKeyFirstPart()}...${nostrPubKeyLastPart()}`;
    const copySuccessMessage = Utilities.buildElement('span','c-nostr-copy__message');
    copySuccessMessage.innerHTML = 'Copied';
    const nostrContainer = document.getElementById('js-nostr-key');
    const nostrButton = document.getElementById('js-nostr-copy');
    const copyIcon = document.querySelector('.js-copy-icon');

    function copyFeedback(){
		if (!nostrButton || !copyIcon) return
        nostrButton.append(copySuccessMessage);
        copyIcon.remove();
        console.log('copied');
        setTimeout(() => {
            nostrButton.append(copyIcon);
            copySuccessMessage.remove();
        }, 2000)
    }

    function copyKey(){
        navigator.clipboard.writeText(nostrPubKey)
        .then(function() {
            copyFeedback();
        })
        .catch(function(err) {
            console.error('Failed to copy text to clipboard: ', err);
        });
    }

	if (!nostrContainer || !nostrButton) return
	nostrContainer.innerText = nostrPubKeyDisplay;
	nostrButton.addEventListener('click', () => {
		copyKey();
	});
}


export default NostrKeyDisplay;