import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.scss']
})
export class FrequentQuestionsComponent implements OnInit {
  public smallHeight = '30px';
  public bigHeight = '100px';
  public blackColor = '#474747';
  public whiteColor = '#FFF';

  public questions = [
    {
      header: 'Какие документы требуются для осуществления международной перевозки груза?',
      text: 'Для международной перевозки Вам потребуются: товарная накладная, счет-фактура и CMR.Если заказчиком является физическое лицо, то вместо товарной накладной следует предъявить опись перевозимого груза.',
      height: this.bigHeight,
      color: this.blackColor,
      background_color: this.whiteColor,
      isExpand: true
    },
    {
      header: 'Следует ли вносить предоплату за перевозку груза?',
      text: 'До момента, пока авто не приедет к Вам на погрузку, никакой оплаты производить не нужно. Услуги по грузоперевозке следует оплатить только после того, как Ваш груз будет загружен.',
      height: this.smallHeight,
      color: this.whiteColor,
      background_color: this.blackColor,
      isExpand: false
    },
    {
      header: 'Какие документы вы предоставляете после выполнения услуг грузоперевозки?',
      text: 'С нашей стороны предоставляются: Договор, счет-фактура и акт выполненных работ. Также, при необходимости, может быть предоставлен бланк CMR.',
      height: this.smallHeight,
      color: this.whiteColor,
      background_color: this.blackColor,
      isExpand: false
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

  public onQuestionClick(question: any) {
    question.height = question.isExpand ? this.smallHeight : this.bigHeight;
    question.background_color = question.isExpand ? this.blackColor : this.whiteColor;
    question.color = question.isExpand ? this.whiteColor : this.blackColor;
    question.isExpand = !question.isExpand;
  }
}
