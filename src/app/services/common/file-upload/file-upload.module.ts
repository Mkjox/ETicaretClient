import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DialogModule } from '../../../dialogs/dialog.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, NgxFileDropModule, MatDialogModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
