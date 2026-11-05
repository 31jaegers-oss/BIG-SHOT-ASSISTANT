const form=document.getElementById('chatForm');
const input=document.getElementById('messageInput');
const messages=document.getElementById('messages');
const imageInput=document.getElementById('imageInput');
const preview=document.getElementById('attachmentPreview');
const previewImage=document.getElementById('previewImage');
const fileName=document.getElementById('fileName');
let selectedImage=null,selectedUrl=null;
function addMessage(kind,text,imageUrl){const article=document.createElement('article');article.className='message '+kind;const label=document.createElement('div');label.className='speaker';label.textContent=kind==='user'?'YOU':'BIG SHOT';const paragraph=document.createElement('p');paragraph.textContent=text;article.append(label,paragraph);if(imageUrl){const img=document.createElement('img');img.src=imageUrl;img.alt='Attached screenshot';article.append(img)}messages.append(article);messages.scrollTop=messages.scrollHeight}
function showSelected(file){if(!file)return;if(!file.type.startsWith('image/')){addMessage('assistant','THAT FILE IS NOT AN IMAGE. Try a PNG, JPG, or screenshot.');return}if(file.size>8*1024*1024){addMessage('assistant','THAT IMAGE IS TOO BIG! Please choose one under 8 MB.');return}selectedImage=file;if(selectedUrl)URL.revokeObjectURL(selectedUrl);selectedUrl=URL.createObjectURL(file);previewImage.src=selectedUrl;fileName.textContent=file.name||'Pasted screenshot';preview.hidden=false}
imageInput.addEventListener('change',()=>showSelected(imageInput.files[0]));
document.getElementById('removeImage').addEventListener('click',()=>{selectedImage=null;if(selectedUrl)URL.revokeObjectURL(selectedUrl);selectedUrl=null;imageInput.value='';preview.hidden=true});
document.addEventListener('paste',event=>{const item=[...(event.clipboardData?.items||[])].find(x=>x.type.startsWith('image/'));if(item){const file=item.getAsFile();if(file)showSelected(file)}});
document.getElementById('clearChat').addEventListener('click',()=>{messages.replaceChildren();addMessage('assistant','CHAT CLEARED! Fresh start, [[VALUED CUSTOMER]].')});
form.addEventListener('submit',event=>{event.preventDefault();const text=input.value.trim();if(!text&&!selectedImage)return;const imageUrl=selectedUrl;addMessage('user',text||'Check out this screenshot.',imageUrl);input.value='';selectedImage=null;selectedUrl=null;imageInput.value='';preview.hidden=true;addMessage('assistant','THIS INTERFACE IS READY, [[BIG SHOT]]! But the AI brain is not connected yet. The page can display your messages and screenshots, but it needs a secure backend to send them to an AI model. Check README.md for the next setup step.')});