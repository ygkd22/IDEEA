import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class VendorDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveCandidate() {
    this.onSaveComplete();
    // if (this.candidateForm.valid) {
    //     if (this.candidateForm.dirty) {
    //         const e = { ...this.candidate, ...this.candidateForm.value };
    //         e.CandidateId = this.candidate.CandidateId;
    //         this.candidateService.updateCandidate(e).subscribe(
    //             () => this.onSaveComplete(),
    //             (error: any) => this.errorMessage = <any>error
    //         );
    //     } else {
    //         this.onSaveComplete();
    //     }
    // } else {
    //     this.errorMessage = 'Please correct the validation errors.';
    // }
  }
  makeFormActive(): void {
    document.getElementById('editCandidateButton').classList.add('d-none');
    document.getElementById('saveCandidateButton').classList.remove('d-none');
    document.getElementById('entireForm').removeAttribute('disabled');
  }
  onSaveComplete(): void {
    document.getElementById('editCandidateButton').classList.remove('d-none');
    document.getElementById('saveCandidateButton').classList.add('d-none');
    document.getElementById('entireForm').setAttribute('disabled', 'disabled');
    // document.getElementById('editRecruitersButton').classList.remove('d-none');
    // document.getElementById('saveRecruitersButton').classList.add('d-none');
    // document.getElementById('candidateRecruitersForm').setAttribute('disabled', 'disabled');
}
}
