const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const typewriters = (text, element) => {
  return new Promise(async (resolve, reject) => {
    // 是否有文字
    const hasText = element.innerText.length > 0;
    if (hasText) {
      // 先删除文字
      while (element.innerText.length > 0) {
        element.innerText = element.innerText.slice(0, -1);
        await sleep(40);
      }
    }

    await sleep(500);

    // 模拟打字机
    for (let i = 0; i < text.length; i++) {
      element.innerText += text[i];
      await sleep(60);
    }

    // 打字完成
    resolve();
  });
}

const subtitle = document.querySelector('.subtitle-text');

const sentences = [
  'Slacking off!',
  'Trying to do something interesting~',
  'Ehe~ I\'ve been found~',
  'coo coo? coo coo coo!',
  'Neko Fox!',
  '谁だって可爱く変わりたいんだ~'
]

const loop = async () => {
  const text = sentences[Math.floor(Math.random() * sentences.length)];
  await typewriters(text, subtitle);
  await sleep(3000);
  loop();
}

loop();
