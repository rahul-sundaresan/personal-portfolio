import React from 'react';

export default function Footer({data}) {

  if(data){
    var networks= data.social.map(
      (network) => <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    )
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
            <ul className="social-links"> {networks} </ul>

            <ul className="copyright">
              <li>Thanks to Tim Baker for their <a title="React JS Resume Web App Template" href="https://github.com/tbakerx/react-resume-template">theme</a></li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
              <li>Image by <a href="https://pixabay.com/users/rauschenberger-4614580/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3806668">RENE RAUSCHENBERGER</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3806668">Pixabay</a></li>
            </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );

}
