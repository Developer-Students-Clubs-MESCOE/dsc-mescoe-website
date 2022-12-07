export function resetNavStyle(options) {
  if (options.page === 'Home') {
    document.querySelectorAll('.dsc-brand').forEach(e => {
      if (e.classList.contains('fade-in-animation'))
        e.classList.remove('fade-in-animation')
      if (e.classList.contains('fade-out-animation'))
        e.classList.remove('fade-out-animation')
      e.classList.add('fade-out-animation')
    })
    document.querySelector('.dsc-nav').classList.replace('MuiPaper-elevation4', 'MuiPaper-elevation0')
  } else {
    document.querySelectorAll('.dsc-brand').forEach(e => {
      if (e.classList.contains('fade-in-animation'))
        e.classList.remove('fade-in-animation')
      if (e.classList.contains('fade-out-animation'))
        e.classList.remove('fade-out-animation')
      e.classList.add('fade-in-animation')
    })
    document.querySelector('.dsc-nav').classList.replace('MuiPaper-elevation0', 'MuiPaper-elevation4')
  }
}

export function resetFooterStyle() {
  const footer = document.querySelector('#contact');
  if (footer) {
    if (window.innerHeight < document.body.scrollHeight) {
      if (footer.classList.contains('fade-in-animation'))
        footer.classList.replace('fade-in-animation', 'fade-out-animation')
      else footer.classList.add('fade-out-animation')
    } else {
      if (footer.classList.contains('fade-out-animation'))
        footer.classList.replace('fade-out-animation', 'fade-in-animation')
      else footer.classList.add('fade-in-animation')
    }
  }
}

export const serverURL = 'https://gdsc-backend-new.vercel.app';
