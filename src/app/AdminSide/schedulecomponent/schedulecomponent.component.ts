
import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { CreateFormGroupArgs } from '@progress/kendo-angular-scheduler';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
} from "@angular/forms";

import "@progress/kendo-date-math/tz/regions/Europe";
import "@progress/kendo-date-math/tz/regions/NorthAmerica";
/**
 * NOTE: Enum declaration here is for demo compilation purposes only!
 * In the usual case include it as an import from the Scheduler:
 *
 * import { EditMode } from '@progress/kendo-angular-scheduler'
 */

enum EditMode {
  Event,
  Occurrence,
  Series,
}

@Component({
  selector: 'app-schedulecomponent',
  template: `<kendo-scheduler
    [kendoSchedulerBinding]="events"
    [kendoSchedulerReactiveEditing]="createFormGroup"
    [selectedDate]="selectedDate"
    style="height: 600px;"
  >
    <kendo-scheduler-week-view startTime="07:00"> </kendo-scheduler-week-view>
  </kendo-scheduler> `,
  templateUrl: './schedulecomponent.component.html',
  styleUrls: ['./schedulecomponent.component.css']
})
export class SchedulecomponentComponent {

  public selectedDate: Date = new Date("2022-10-22T00:00:00");
  public formGroup: FormGroup;
  public events: SchedulerEvent[] = [
    {
      id: 1,
      title: "Testing",
      start: new Date("2018-10-22T09:00:00"),
      end: new Date("2018-10-22T09:30:00"),
      recurrenceRule: "FREQ=DAILY;COUNT=5;",
    },

    {
      id: 2,
      title: "adf",
      start: new Date("2022-10-22T09:00:00"),
      end: new Date("2022-10-22T09:30:00"),
      recurrenceRule: "FREQ=DAILY;COUNT=5;",
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    const isOccurrence = args.mode === (EditMode.Occurrence as any);
    const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

    this.formGroup = this.formBuilder.group(
      {
        id: args.isNew ? this.getNextId() : dataItem.id,
        start: [dataItem.start, Validators.required],
        end: [dataItem.end, Validators.required],
        startTimezone: [dataItem.startTimezone],
        endTimezone: [dataItem.endTimezone],
        isAllDay: dataItem.isAllDay,
        title: dataItem.title,
        description: dataItem.description,
        recurrenceRule: dataItem.recurrenceRule,
        recurrenceId: dataItem.recurrenceId,
        recurrenceExceptions: [exceptions],
      },
      {
        // validator: this.startEndValidator,
      }
    );

    return this.formGroup;
  }

  public getNextId(): number {
    const len = this.events.length;

    return len === 0 ? 1 : this.events[this.events.length - 1].id + 1;
  }

}
