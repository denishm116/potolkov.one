export default function ({store, redirect}) {

  if(store.$auth.user.isUser) {
    redirect('/')
  } else {
    return true
  }
}
