import { v4 as uuidv4 } from 'uuid';

export class Product {
  protected id: string;
  public name: string;
  public description?: string;
  protected imagePath: string;
  constructor(name: string, description: string | null) {
    this.id = uuidv4();
    this.name = name;
    this.description = description || '';
    this.imagePath = '';
  }

  setImage(path: string) {
    this.imagePath = path;
    console.log('Caminho da imagem alterado para "', path, '".');
  }
  details() {
    let count = 2;
    console.log('Detalhes do Produto:');
    console.log('1- ID: ', this.id);
    console.log('2- Nome: ', this.name);
    if (this.description) {
      count ++;
      console.log(count, '- Descrição: ', this.description);
    }
    if (this.imagePath) {
      count ++;
      console.log(count, '- Caminho da imagem no servidor: ', this.imagePath);
    }
  }
  datilsString() {
    let IdString = `O ID deste produto é: ${this.id}.`;
    let NameString = `O nome deste produto é "${this.name}".`;
    let DescriptionString = `A descrição deste produto é: ${this.description}`;
    let ImageString = `O caminho para a imagem deste produto é: ${this.imagePath}`;
    let result: Object = {
      ID: IdString, Name: NameString
    };
    if (this.description) {
      result.Descriprion = DescriptionString;
    }
    if (this.imagePath) {
      result.Image = ImageString;
    }
  }
  detailsAPI() {
    // Esta parte é mais demonstrativa do que funcional.
    return {
      productId: this.id,
      productName: this.name,
      productDescription: this.description,
      productImagePath: this.imagePath
    }
  }
}