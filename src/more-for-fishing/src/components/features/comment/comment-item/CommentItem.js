import defaultAvatarPath from '../../../../assets/default-avatar-profile.png';
import Moment from 'moment';

import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { submitHandler } from '../../../shared/confirm-box/Confirm';
import * as commentService from '../../../../services/commentService';
import './CommentItem.css';

export const CommentItem = ( {comment, articleId} ) => {
    Moment.locale('en');
    const { user } = useContext(AuthContext);

    const canModify = comment.author === user.username || user.isAdmin;

    const canLike = comment.likes.includes(user.id) &&
    comment.author !== user.username;

    const canDislike = comment.likes.includes(user.id);

    let editMode = false;

    const deleteComment = () => {
        submitHandler(
          confirmDeleteHandler,
          'Confirm deletion',
          'Are you sure that you want to delete the comment?'
        );
      };

    const confirmDeleteHandler = () => {
        commentService
          .deleteAllCommentsByArticle(articleId)
          .then(() => {
            // todo: reload
            toast.success('Successfully deleted comment!');
          })
          .catch((err) => {
            toast.error(err);
          });
      };

    const editComment = (commentId, articleId) => {
        const body = comment;
        body.author = user.username;
        body.authorPicture = user.photo;
        body.articleId = articleId;
        body.likes = comment.likes;

        commentService
        .editComment(comment._id, body)
        .then(() => {
            // todo: reload
            toast.success('Successfully updated comment!');
            editMode = false;
        })
        .catch((err) => {
          toast.error(err);
        });
      }

      const likeComment = (commentId) => {
        const body = comment;
        body.likes.push(user.id);

        commentService
        .editComment(comment._id, body)
        .then(() => {
            // todo: reload
            toast.success('Successfully like comment!');
        })
        .catch((err) => {
          toast.error(err);
        });
      }

      const dislikeComment = (commentId) => {
        const body = comment;
        const index = body.likes.indexOf(user.id);
        body.likes.splice(index, 1);

        commentService
        .editComment(comment._id, body)
        .then(() => {
            // todo: reload
            toast.success('Successfully dislike comment!');
        })
        .catch((err) => {
          toast.error(err);
        });
      }
      
  return (
    <div>
       {editMode && ( <div className="card mb-4">
          <div className="card-body">
            <p>{comment.content}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img
                      src={
                        comment.authorPicture === '' || comment.authorPicture === 'null' ? defaultAvatarPath : comment.authorPicture
                      }
                      alt="avatar" width={25} height={25}
                    />
                <p className="small mb-0 ms-2 text-muted small"><i className="fas fa-user" /> {comment.author}</p>
                <p className="small mb-0 ms-2 text-muted small"><b className="mb-1">posted:</b>:
                  <span className="fas fa-calendar p-1">  {Moment(comment._kmd['ect']).format('dd/MM/yyyy')} </span>
                  <span className="fa fa-clock-o p-1">  {Moment(comment._kmd['ect']).format('HH:mm')}</span>
                </p>
              </div>
              <div className="d-flex flex-row align-items-center">
                <i *ngif="canModify" className="fas fa-edit mx-2 fa-xs text-black" (click)="editMode = true" title="edit comment" />
                <i *ngif="canModify" className="far fa-trash-alt mx-2 fa-xs text-black" (click)="deleteComment(comment._id)" title="delete comment" />
                <i *ngif="canLike" className="fa fa-thumbs-o-up mx-2 fa-xs text-black" (click)="likeComment(comment._id)" title="like comment" />
                <i *ngif="canDislike" className="fa fa-thumbs-o-down mx-2 fa-xs text-black" (click)="dislikeComment(comment._id)" title="dislike comment" />
              </div>
            </div>
            <p className="small mb-0 pt-2 text-muted small"><b>Likes:</b> {comment.likes.length}</p>
          </div>
        </div>)}
        <form *ngif="editMode" className="mb-3" [formgroup]="editCommentForm" (submit)="editComment(comment._id, comment.articleId)">
          {/* content */}
          <p className="form-outline mb-4">
            <textarea type="text" className="form-control" rows={3} formcontrolname="content" [ngmodel]="comment.content" defaultValue={""} />
          </p>
          <ng-container *ngif="f['content'].touched && f['content'].invalid">
            <p *ngif="f['content'].errors['required']" className="alert alert-danger">
              Content is required!
            </p>
          </ng-container>
          <button type="submit" className="btn btn-primary btn-sm mr-1" [disabled]="editCommentForm.invalid"> Edit comment
          </button>
          <button className="btn btn-warning btn-sm" (click)="editMode = false">Cancel </button>
        </form>
      </div>
  );
};
