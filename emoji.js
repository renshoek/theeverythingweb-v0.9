function emoji() {

    var things = ['😀', '😃', '😄', '😁', '😆', '🤩', '😅', '😂', '🤣', '☺️', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '🤪', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '🤬', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '🤯', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🥱', '🙄', '🤨', '🧐', '🤔', '🤫', '🤭', '🤥', '😬', '🤐', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '🤲', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤘', '🤏', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '🤟', '✍️', '🤳', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '🦻', '👃', '🦵', '🦶', '🦾', '🦿', '👣', '👁', '👀', '🗣', '👤', '👥', '👶', '👦', '👧', '🧒', '👨', '👩', '🧑', '👱‍♀️', '👱', '🧔', '👴', '👵', '🧓', '👲', '👳‍♀️', '👳', '🧕', '👮‍♀️', '👮', '👷‍♀️', '👷', '💂‍♀️', '💂', '🕵️‍♀️', '🕵️', '👩‍⚕️', '👨‍⚕️', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎓', '👨‍🎓', '👩‍🎤', '👨‍🎤', '👩‍🏫', '👨‍🏫', '👩‍🏭', '👨‍🏭', '👩‍💻', '👨‍💻', '👩‍💼', '👨‍💼', '👩‍🔧', '👨‍🔧', '👩‍🔬', '👨‍🔬', '👩‍🎨', '👨‍🎨', '👩‍🚒', '👨‍🚒', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍⚖️', '👨‍⚖️', '🤶', '🎅', '👸', '🤴', '👰', '🤵', '👼', '🤰', '🤱', '🙇‍♀️', '🙇', '💁', '💁‍♂️', '🙅', '🙅‍♂️', '🙆', '🙆‍♂️', '🙋', '🙋‍♂️', '🤦‍♀️', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🙎', '🙎‍♂️', '🙍', '🙍‍♂️', '💇', '💇‍♂️', '💆', '💆‍♂️', '🧖‍♀️', '🧖‍♂️', '🧏', '🧏‍♂️', '🧏‍♀️', '🧙‍♀️', '🧙‍♂️', '🧛‍♀️', '🧛‍♂️', '🧟‍♀️', '🧟‍♂️', '🧚‍♀️', '🧚‍♂️', '🧜‍♀️', '🧜‍♂️', '🧝‍♀️', '🧝‍♂️', '🧞‍♀️', '🧞‍♂️', '🕴', '💃', '🕺', '👯', '👯‍♂️', '🚶‍♀️', '🚶', '🏃‍♀️', '🏃', '🧍', '🧍‍♂️', '🧍‍♀️', '🧎', '🧎‍♂️', '🧎‍♀️', '👨‍🦯', '👩‍🦯', '👨‍🦼', '👩‍🦼', '👨‍🦽', '👩‍🦽', '🧑‍🤝‍🧑', '👫', '👭', '👬', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👪', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👦‍👦', '👩‍👧‍👧', '👨‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👦‍👦', '👨‍👧‍👧', '👚', '👕', '👖', '👔', '👗', '👙', '👘', '👠', '👡', '👢', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '🤿', '🌂', '☂️', '🧣', '🧤', '🧥', '🦺', '🥻', '🩱', '🩲', '🩳', '🩰', '🧦', '🧢', '⛷', '🏂', '🏋️‍♀️', '🏋️', '🤺', '🤼‍♀️', '🤼‍♂️', '🤸‍♀️', '🤸‍♂️', '⛹️‍♀️', '⛹️', '🤾‍♀️', '🤾‍♂️', '🏌️‍♀️', '🏌️', '🏄‍♀️', '🏄', '🏊‍♀️', '🏊', '🤽‍♀️', '🤽‍♂️', '🚣‍♀️', '🚣', '🏇', '🚴‍♀️', '🚴', '🚵‍♀️', '🚵', '🤹‍♀️', '🤹‍♂️', '🧗‍♀️', '🧗‍♂️', '🧘‍♀️', '🧘‍♂️', '🥰', '🥵', '🥶', '🥳', '🥴', '🥺', '🦸', '🦹', '🧑‍🦰', '🧑‍🦱', '🧑‍🦳', '🧑‍🦲', '🧑‍⚕️', '🧑‍🎓', '🧑‍🏫', '🧑‍⚖️', '🧑‍🌾', '🧑‍🍳', '🧑‍🔧', '🧑‍🏭', '🧑‍💼', '🧑‍🔬', '🧑‍💻', '🧑‍🎤', '🧑‍🎨', '🧑‍✈️', '🧑‍🚀', '🧑‍🚒', '🧑‍🦯', '🧑‍🦼', '🧑‍🦽', '🦰', '🦱', '🦲', '🦳'];
    var thing = things[Math.floor(Math.random() * things.length)];
    var thing2 = things[Math.floor(Math.random() * things.length)];
    var thing3 = things[Math.floor(Math.random() * things.length)];
    var thing4 = things[Math.floor(Math.random() * things.length)];
    var thing5 = things[Math.floor(Math.random() * things.length)];

    var thing6 = things[Math.floor(Math.random() * things.length)];

    var thing7 = things[Math.floor(Math.random() * things.length)];

    var thing8 = things[Math.floor(Math.random() * things.length)];

    var thing9 = things[Math.floor(Math.random() * things.length)];

    var thing0 = things[Math.floor(Math.random() * things.length)];

    document.getElementById("emoji").innerHTML = ('Emoji SiMuleter: ' + thing + thing2 + thing3 + thing4 + thing5 + thing6 + thing7 + thing8 + thing9 + thing0);

};

function emojiGet() {
    document.getElementById("emoji").innerHTML = emoji;
};

setInterval(emoji, 1300);