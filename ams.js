/*
*	Ams framework fran�ais Javascript
*/

/**
 * @module AMS framework
 * @namespace Ams
 */
var ams = {
		/**
		 * @param {String} version donne le numero de version de AMS
		 */
		version : '1.0.1',
		/**
		 * zone de definition du type de navigateur
		 * @param {String} navigateur_utilisateur 
		 * @param {String} navigateur_app
		 * @param {String} navigateur_ie
		 * @param {String} navigateur_opera
		 * @param {String} navigateur_safari
		 * @param {String} navigateur_chrome
		 * @param {String} navigateur_fx
		 * @param {String} navigateur_modele
		 * @param {String} navigateur_version 
		 */
		navigateur_utilisateur : navigator.userAgent,
		navigateur_app : navigator.appName,
		navigateur_ie : false,
		navigateur_opera : false,
		navigateur_safari  : false,
		navigateur_chrome : false,
		navigateur_fx : false,
		navigateur_modele : '',
		navigateur_version : '',
		navigateur : function (){
			if(this.navigateur_app.indexOf("Microsoft Internet Explorer", 0)>=0){ 
				this.navigateur_ie = true; 
				this.navigateur_modele = 'ie'; 
				var pos = this.navigateur_utilisateur.indexOf("MSIE", 0);
				if(pos >= 0){
					pos += "MSIE ".length;
					var pos_s = this.navigateur_utilisateur.indexOf(";", pos);
					if(pos_s >= 0){
//						pos_s--;
						this.navigateur_version = this.navigateur_utilisateur.substring(pos, pos_s);
						}
					}
				}
			if(this.navigateur_app.indexOf("Opera", 0)>=0){ 
				this.navigateur_opera = true; 
				this.navigateur_modele = 'opera'; 
				var pos = this.navigateur_utilisateur.indexOf("Version/", 0);
				if(pos >= 0){
					pos += "Version/".length;
					var pos_s = this.navigateur_utilisateur.indexOf(".", pos);
					if(pos_s >= 0){
//						pos_s--;
						this.navigateur_version = this.navigateur_utilisateur.substring(pos, pos_s);
						}
					}
				}
			if(this.navigateur_utilisateur.indexOf("Chrome", 0)>=0){ 
				this.navigateur_chrome = true; 
				this.navigateur_modele = 'chrome'; 
				var pos = this.navigateur_utilisateur.indexOf("Chrome/", 0);
				if(pos >= 0){
					pos += "Chrome/".length;
					var pos_s = this.navigateur_utilisateur.indexOf(" ", pos);
					if(pos_s >= 0){
//						pos_s--;
						this.navigateur_version = this.navigateur_utilisateur.substring(pos, pos_s);
						}
					}
				}
			if(this.navigateur_utilisateur.indexOf("Firefox", 0)>=0){ 
				this.navigateur_fx = true; 
				this.navigateur_modele = 'firefox'; 
				var pos = this.navigateur_utilisateur.indexOf("Firefox/", 0);
				if(pos >= 0){
					pos += "Firefox/".length;
					var pos_s = this.navigateur_utilisateur.indexOf(".", pos);
					if(pos_s >= 0){
//						pos_s--;
						this.navigateur_version = this.navigateur_utilisateur.substring(pos, pos_s);
						}
					}
				}
			if(this.navigateur_utilisateur.indexOf("Safari", 0)>=0){ 
				this.navigateur_safari = true; 
				this.navigateur_modele = 'safari'; }
				var pos = this.navigateur_utilisateur.indexOf("Version/", 0);
				if(pos >= 0){
					pos += "Version/".length;
					var pos_s = this.navigateur_utilisateur.indexOf(" ", pos);
					if(pos_s >= 0){
	//					pos_s--;
						this.navigateur_version = this.navigateur_utilisateur.substring(pos, pos_s);
						}
					}
		},
		initialiser: function(){
			this.navigateur();
		},
		  elems:[],// Tableau pour sauvegarder tous les �l�ments trouv�s par les fonctions getById, getByClass
	    /**
	     * R�cup�re tous les �l�ments par ID. Peut prendre plus d'un param�tre
	     * @param {String}  la chaine de l'ID a rechercher
	     * @return {this} Renvoie this dans l'ordre d'appel
	     */
	    recupereParId:function(){
	        var tempElems = []; // tableau temporaire pour sauvegarder les �l�ments trouv�s
	        for(var i = 0; i<arguments.length; i++){
	            if(typeof arguments[i] === 'string'){ // V�rifie que le param�tre est une cha�ne
	                tempElems.push(document.getElementById(arguments[i])); // Ajoute l'�lement � tempElems
	            }
	        }
	        this.elems = tempElems; // Tous les �l�ments sont copi�s dans la propri�t� elems
	        return this; // Renvoie this dans l'ordre d'appel
	    },

	    /**
	     * Ajoute une nouvelle classe � un �l�ment
	     * Cela ne supprime pas les autres classes, elle en ajoute simplement une nouvelle
	     * @param {String}  name nom de la classe � ajouter
	     * @return {this} Renvoie this dans l'ordre d'appel
	     */
	    ajouteClasse:function(name){
	        for(var i = 0;i<this.elems.length;i++){
	            this.elems[i].className += ' ' + name; // C'est ici qu'on ajoute la nouvelle classe
	        }
	        return this; // Renvoie this dans l'ordre d'appel
	    },
	                    
	                        
	    /**
	     * Ajoute un �v�nement aux �l�ments trouv�s par la m�thodes : getById et getByClass
	     * Action est un type d'�v�nement comme 'click', 'mouseover', 'mouseout', etc
	     *  Callback est la fonction � ex�cuter lorsque l'�v�nement est d�clench�
	     * @param {String}  [action=''] action est un evenement de type click, mouseover, etc.
	     * @param {function}  [callback=''] fonction appel�e une fois l'op�ration execut�e
	     * @return {this} Renvoie this dans l'ordre d'appel
	     */
	    on: function(action, callback){
	        if(this.elems[0].addEventListener){
	            for(var i = 0;i<this.elems.length;i++){
	                this.elems[i].addEventListener(action,callback,false);//Ajout de l'�v�nement du W3C pour Firefox,Safari,Opera...   
	            }
	        }
	        else if(this.elems[0].attachEvent){
	            for(var i = 0;i<this.elems.length;i++){
	                this.elems[i].attachEvent('on'+action,callback); // Ajout de l'�v�nement pour Internet Explorer :(
	            }
	        }
	        return this; // Renvoie this dans l'ordre d'appel
	    },
	                        
	    /**
	     * Ajout du texte sur les �l�ments
	     * @param {String}  [text=''] est la chaine � ins�rer
	     * @return {this} Renvoie this dans l'ordre d'appel
	     */
	    ajouteTexte:function(text){
	        text = document.createTextNode(text); // Cr�e un nouveau noeud texte avec la cha�ne fournie
	        for(var i = 0;i<this.elems.length;i++){
	            this.elems[i].appendChild(text); // Ajoute le texte � l'�l�ment
	        }
	        return this; // Renvoie this dans l'ordre d'appel
	    },
	            
	    /**
	     * Affiche ou masque les �l�ments trouv�s
	     * @param {String}  [text=''] ID de l'�l�ment trouv�
	     * @return {this} Renvoie this dans l'ordre d'appel
	     */
	    afficheMasque:function(){
	        for(var i = 0;i<this.elems.length;i++){
	            this.elems[i].style['display'] = (this.elems[i].style['display']==='none' || '') ?'block':'none'; 
				// V�rifie le statut de l'�l�ment pour savoir si il peut �tre affich� ou masqu�
	        }
	        return this; // Renvoie this dans l'ordre d'appel
	    }        
		
};
