import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

export class StandardUrlSerializer implements UrlSerializer {

  appContants = {
    outlets: ['appRight']
  };

  private _defaultUrlSerializer: DefaultUrlSerializer = new DefaultUrlSerializer();

  parse(url: string): UrlTree {
      this.appContants.outlets.forEach(outletName => {
          const reg = new RegExp('/(' + outletName + ')/([^\/]*)');
          url = url.replace(reg, '$1/($1:$2)' );
          //console.log(url);
      });
      return this._defaultUrlSerializer.parse(url);
  }

  serialize(tree: UrlTree): string {
      let url = this._defaultUrlSerializer.serialize(tree);
      console.log(url);
      this.appContants.outlets.forEach(outletName => {
          const reg = new RegExp('\\(' + outletName + ':([^\/]*)\/?([^\/]*)?\\)');
          if(url.includes('customer') || url.includes('driver') || url.includes('owner')){
            url = url.replace(reg, '$1');
          }else{
            url = url.replace(reg, '');
          }
      });
      return url;
  }

}
